import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function ListProduct() {

    const data = [{
        photo: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-3123971/snta_snta-sepatu-gunung-pria--snta-498-_full44.jpg",
        name: "sepatu kucing",
        catagory: "outdoor",
        price: .99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        photo: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-3123971/snta_snta-sepatu-gunung-pria--snta-498-_full44.jpg",
        name: "sepatu kucing ver 2",
        catagory: "outdoor",
        price: .99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol"
    }]

    return (
        <div className="list-product">
            <div className="list-product__add">
                <AddCircleIcon />
                <p>Add Items</p>
            </div>
            <table className="list-product__table">
                <thead className="table-head">
                    <tr>
                        <th className="table-head table-head__no">No</th>
                        <th className="table-head table-head__photo">Foto Produk</th>
                        <th className="table-head table-head__name">Nama Produk</th>
                        <th className="table-head table-head__catagory">Katagori Produk</th>
                        <th className="table-head table-head__price">Harga</th>
                        <th className="table-head table-head__description">Deskripsi</th>
                        <th className="table-head table-head__action">Sunting</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="table-body table-body__no">{index + 1}</td>
                                <td className="table-body table-body__photo">
                                    <div className="table-body__photo--container">
                                        <img className="table-body__photo--image" src={item.photo} alt="product-pict" />
                                    </div>
                                </td>
                                <td className="table-body table-body__name">{item.name}</td>
                                <td className="table-body table-body__catagory">{item.catagory}</td>
                                <td className="table-body table-body__price">${item.price}</td>
                                <td className="table-body table-body__description">
                                    <div className="table-body__description--container">
                                    {item.description}
                                    </div>
                                </td>
                                <td className="table-body table-body__action">
                                    <div className="table-body__action--container">
                                        <EditIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                                        <DeleteIcon style={{ cursor: 'pointer', marginLeft: '5px' }} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default ListProduct  