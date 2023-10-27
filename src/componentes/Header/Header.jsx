import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='logo' src= "https://logos-download.com/wp-content/uploads/2016/08/Decathlon_logo.png" alt="logoDecathlon" />
            <input type="text" placeholder='Busca producto, deporte...' />
            <button><img className='iconoLupa' src="https://www.pngkit.com/png/full/26-269603_search-magnifying-glass-icon-png-grey.png" alt="lupa" /></button>
            <button><img className='iconoAyuda' src="http://cdn.onlinewebfonts.com/svg/img_29341.png" alt="lupa" /></button>
            <button><img className='iconoTienda' src="https://cdn.icon-icons.com/icons2/743/PNG/512/store-2_icon-icons.com_63468.png" alt="lupa" /></button>
            <button><img className='iconoCuenta' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-account-circle_89831.png" alt="lupa" /></button>
            <button><img className='iconoCesta' src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643737-cart-drop-shop-shopping-trolly_113425.png" alt="lupa" /></button>
        </div>
    )
}




export default Header 