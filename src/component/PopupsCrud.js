import React from 'react'

function PopupsCrud() {
    return (
        <form className="popups-crud">
            <div className="popups-crud__container">
                <label htmlFor="name-product">Nama Produk</label>
                <input id="name-product" type="text" />
                <label htmlFor="catagory-product">Katagori Produk</label>
                <input id="catagory-product" type="text" />
                <label htmlFor="price-product">Harga Produk</label>
                <input id="price-product" type="number" />
                <label htmlFor="description-product">Deskripsi</label>
                <input id="description-product" type="text" />
                <label htmlFor="image-product">Pilih Gambar</label>
                <input id="image-product" type="file" accept="image/*" />
                <div className="popups-button">
                    <button className="popups-button__save">Save</button>
                    <button className="popups-button__delete">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default PopupsCrud
