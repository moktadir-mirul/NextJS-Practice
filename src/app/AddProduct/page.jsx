import { AddAProduct } from "../Actions/CreateProduct";

export default function AddProduct() {

    return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
                action={AddAProduct}
			>
				<p>Title</p>
				<input
					
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
                   
				/>
				<br />
				<p>Description</p>
				<input
					
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
                   
				/>
				<br />
				<p>Price</p>
				<input
					
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
                    
				/>
				<br />
				<p>Image</p>
				<input
					
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
                    
				/>
				<input type="submit" />
			</form>
		</>
	);
} 