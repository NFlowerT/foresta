import React, {useContext} from "react"
import style from "../styles/market/market.module.scss"
import Image from "next/image"
import {TreesContext} from "./_app"
//components
import Search from "../components/global/search"
import ProductTile from "../components/global/productTile"

const Gallery = ({ putOnSale, endSale }) => {
	const {trees} = useContext(TreesContext)

	const renderProductTileAll = () => {
		if(trees.length===0) return 0
		const productTiles = []
		for (let i = 0; i<trees.length; i++) {
			productTiles.push(<ProductTile key={trees[i].id} id={trees[i].id} tree={trees[i]}/>)
		}

		return (
			<section className={style.productsContainer}>
				{productTiles}
			</section>
		)
	}

	return (
		<main className={style.container}>
			<div className={style.guideSection}>
				<div className={style.title}>
					<div className={style.titleImageContainer}>
						<Image src="/Rectangle14.svg" height={55} width={421}/>
					</div>
					<div className={style.tileTextContainer}>
						<h1 className={style.titleText}>GALLERY</h1>
					</div>

				</div>
				{/*<Search></Search>*/}
				<div></div>
			</div>
			<div className={style.productsContainer}>
				{(trees)?((trees.length!==0)?renderProductTileAll():null) :null}
			</div>
		</main>

	)
}

export default Gallery
