import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Image from 'next/image'
import style from "../styles/product/product.module.scss"


const ProductPage = ({putOnSale, endSale, buyFromSale, account, accountTrees, treesOnSale, trees, contract}) => {
    const [router, setRouter] = useState(useRouter())
    const [treeId, setTreeId] = useState()
    const [owner, setOwner] = useState(undefined)
    const [genes, setGenes] = useState()
    const [price, setPrice] = useState()
    const [birthdate, setBirthdate] = useState()
    const [sale, setSale] = useState(false)
    const [saleId, setSaleId] = useState(undefined)

    useEffect(()=>{
        setTreeId(router.query.id)
        console.log(router.query.id, "q")
    }, [])

    useEffect(()=>{
        (async () => {
            await ownerOfTree()
            await treeGenes()
                isOnSale()
        })()
    })

    const ownerOfTree = async () => {
        if(contract && treeId!==undefined && account){
            try{
                let owner = await contract.methods.ownerOf(treeId).call()
                if(owner.toLowerCase() == account) {
                    setOwner(account)
                }
                else setOwner(owner)
            }
            catch(err) {
                console.log(err)
            }
        }
    }
    const treeGenes = async () => {
        console.log(account, treeId, contract)
        if(contract && treeId!==undefined && account){
            try{
                let tree = await contract.methods.trees(treeId).call()
                let genes = tree.genes
                let birthdate = tree.birthdate
                console.log(tree , birthdate)
                setGenes(genes)
                setBirthdate(birthdate)
            }
            catch(err){
                console.log(err)
            }
        }
    }
    const isOnSale = () => {
        if(treesOnSale.length !== 0){
            treesOnSale.forEach((tree, index) => {
                console.log(tree)
                if(tree.tree.TreeId == treeId){
                    if(tree.tree.active == true){
                        setSale(true)
                        setSaleId(index)
                        setPrice(tree.tree.valueWei)
                    }
                    else{
                        setSale(false)
                    }
                }
            })
        }
    }

    return (
        <div className={style.body}>

            <div className={style.container}>
                <div className={style.titleContainer}>
                    <div className={style.title}>
                        <div className={style.titleImageContainer}>
                            <Image src="/Rectangle14.svg" height={54} width={421}/>
                        </div>
                        <div className={style.tileTextContainer}>
                            <h1 className={style.titleText}>NAME</h1>
                        </div>
                    </div>
                    {
                        (sale && owner==account)? <button onClick={async () => await endSale(saleId)}>end sale</button> : null
                    }
                    {
                        (!sale && owner==account)? <button onClick={async ()=> await putOnSale(treeId) }>sale</button> : null
                    }
                </div>
                <div className={style.productContainer}>
                    <div className={style.infoContainer}>
                        <div className={style.infoImage}>
                            <Image src="/Rectangle42.svg" height={140} width={653}></Image>
                        </div>
                        <div className={style.info}>
                            {(price)? <div>price: {price/1000000000000000000} ETH</div> : null}
                            <div>owner: {owner}</div>
                            <div>birthdate: {new Date(birthdate*1000).toLocaleDateString("en-US")}</div>
                        </div>
                    </div>
                </div>

                {/*{treeId}*/}
            </div>

        </div>
    );
};

export default ProductPage;
