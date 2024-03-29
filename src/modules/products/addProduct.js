import { useAddProducts } from "./useAddProducts";
import "../../StyleSheet/addProduct.css";

function AddProduct() {

  const [
    sendSubmitData,
    SubmitData,
    url,
    fileSelectedHandler,
    fileUploadHandler,
    formData,
  ] = useAddProducts();

  return (
    <div className="post_product">
      <h3>POST YOUR ADD</h3>
      <div className="inner_post">
        <div>
          <h4>INCLUDE SOME DETAILS</h4>
          <form>
            <div className="inner_form1">
              <label>Company*</label>
              <br />
              <input
                name="make"
                value={formData.company}
                onChange={SubmitData}
              />
              <br />
              <label className="small_info">
                for example Samsung,apple etc
              </label>
              <br />
              <br />
              <label>Ad title*</label>
              <br />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={SubmitData}
              ></input>
              <br />
              <label className="small_info">
                Mention the key featurs of your item (e.g brand,model,age, type)
              </label>
              <br />
              <br />
            </div>

            <div className="inner_form2">
              <h4 style={{ marginBottom: "10px" }}>SET A PRICE</h4>
              <label>Price*</label>
              <br />
              <div className="price_input">
                <label style={{ fontSize: "14px" }}>Rs: |</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={SubmitData}
                  style={{
                    width: "130px",
                    height: "19px",
                    border: "none",
                  }}

                />
              </div>
            </div>

            <div className="img_upload">
              <input type="file" onChange={fileSelectedHandler} name="image" />
              <br /> <br />
              <button
                style={{ color: "white", backgroundColor: "purple" }}
                onClick={fileUploadHandler}
              >
                Save
              </button>
              <br />
              <label>
                <b>Image Preview here:</b>
              </label>
              <br />
              <img
                src={url}
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "grey",
                }}
                alt="no found"
              />
              <br />
            </div>

            <div
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
              className="select_location"
            >
              <label>Ad Location*</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={SubmitData}
              />
            </div>

            <div className="category_div">
              <label>Ad Category*</label>
              <input
                type="text"
                value={formData.category}
                onChange={SubmitData}
                placeholder="category"
                name="cate"
                style={{ display: "block" }}
              />
              <label className="small_info">
                Select only
                MobilePhones,Cars,Motorcycles,Houses,Tv-Audio-Video,Tablets,Land
              </label>
            </div>

            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <button type="submit" onClick={sendSubmitData}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
