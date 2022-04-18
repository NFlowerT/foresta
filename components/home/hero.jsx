import React from "react"
import style from "../../styles/home/hero.module.scss"
import NTree from "../../nTree/NTree"

const Hero = ({mint, title, subtitle}) => {
	const rem = typeof document !== "undefined" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 20
	return (
		<div className={style.heroMain}>

			<div className={style.heroLogoContainer}>
				<div className={style.heroLogo}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</div>

			</div>
			<NTree
				dnaArray={[
					{
						dna: "#52473e&0.68&0.83&0.33|0.00|0|57.94,0.03|0.80|0|96.48,0.39|1.60|0|33.90,0.26|2.40|0|31.57,0.10|3.20|0|62.56,0.29|4.00|0|6.20^#647a26&3.8&0.1&0.2&4.10|2.46|3.30|-20.00,3.48|2.09|3.30|30.00,2.96|1.78|3.50|30.00,2.52|1.51|3.30|10.00,2.14|1.28|3.30|-30.00&2&0&0",
						age: 15
					},
					{
						dna: "#52473e&0.68&0.83&0.33|0.00|0|57.94,0.03|0.80|0|96.48,0.39|1.60|0|33.90,0.26|2.40|0|31.57,0.10|3.20|0|62.56,0.29|4.00|0|6.20^#647a26&3.8&0.1&0.2&4.10|2.46|3.30|-20.00,3.48|2.09|3.30|30.00,2.96|1.78|3.50|30.00,2.52|1.51|3.30|10.00,2.14|1.28|3.30|-30.00&2&0&0",
						age: 15
					},
					{
						dna: "#52473e&0.68&0.83&0.33|0.00|0|57.94,0.03|0.80|0|96.48,0.39|1.60|0|33.90,0.26|2.40|0|31.57,0.10|3.20|0|62.56,0.29|4.00|0|6.20^#647a26&3.8&0.1&0.2&4.10|2.46|3.30|-20.00,3.48|2.09|3.30|30.00,2.96|1.78|3.50|30.00,2.52|1.51|3.30|10.00,2.14|1.28|3.30|-30.00&2&0&0",
						age: 15
					},
					{
						dna: "#52473e&0.68&0.83&0.33|0.00|0|57.94,0.03|0.80|0|96.48,0.39|1.60|0|33.90,0.26|2.40|0|31.57,0.10|3.20|0|62.56,0.29|4.00|0|6.20^#647a26&3.8&0.1&0.2&4.10|2.46|3.30|-20.00,3.48|2.09|3.30|30.00,2.96|1.78|3.50|30.00,2.52|1.51|3.30|10.00,2.14|1.28|3.30|-30.00&2&0&0",
						age: 15
					},
				]}
				islandSize={10}
				rockAmount={2}
				width={40 * rem}
				height={45 * rem}
				className={style.heroTreeContainer}
				cameraPosition={{x: 15, y: 1, z: 15}}
				y={-3}
				innerRadius={8}
			/>
		</div>
	)
}
// , (prevProps, nextProps)=>{
// 	 console.log(prevProps.trees, nextProps.trees)
// 	return prevProps.trees === nextProps.trees;
// }


export default Hero
