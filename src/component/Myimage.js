import React from "react";

const Myimage = ({ imgs = [{ url: "" }] }) => {
    console.log(imgs);
    return (
        <div className="myimage">
            <div className="mainimage">
                <img src={imgs[0].url} alt={imgs[0].filename} />
            </div>
        </div>
    )
}

export default Myimage;