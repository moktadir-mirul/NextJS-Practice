import { AllProducts } from "./Components/AllProducts";
import "./page.module.css";




export default async function Shop() {
    return(
		
		<div>
			<h1 className="text-danger">Hello Bootstrap</h1>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<AllProducts />
					</div>
				</div>
			</div>
		</div>
    )
}
