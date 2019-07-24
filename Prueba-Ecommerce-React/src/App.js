import React, { Component } from 'react';
import './App.css';

let products = [{
	"id": 1, "name": "Dare-Davis", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbivel lectus in quam fringilla rhoncus.nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.Mauris lacinia sapien quis libero.nNullam sit amet turpis elementum ligula vehicula consequat.Morbi a ipsum.Integer a nibh.",
	"tag": "Turquoise", "url": "https://robohash.org/pariatursedmollitia.jpg?size=250x250&set=set1", "price": "59.20"
},
{
	"id": 2, "name": "Moore LLC", "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.Praesent lectus.nVestibulum quam sapien, varius ut, blandit non, interdum in, ante.Vestibulum ante ipsum primis infaucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.Curabitur convallis.nDuisconsequat dui nec nisi volutpat eleifend.Donec ut dolor.Morbi vel lectus in quam fringilla rhoncus.", "tag": "Yellow",
	"url": "https://robohash.org/asperioresnemoomnis.png?size=250x250&set=set1", "price": "82.24"
},
{
	"id": 3, "name": "Berge-Heathcote", "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorperpurus sit amet nulla.Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "tag": "Mauv", "url":
		"https://robohash.org/utdelectusquia.png?size=250x250&set=set1", "price": "51.42"
},
{
	"id": 4, "name": "Harvey, Cronin and Schoen", "description": "Duis bibendum, felis sed interdum venenatis, turpis enimblandit mi, in porttitor pede justo eu massa.Donec dapibus.Duis at velit eu est congue elementum.nIn hac habitasseplatea dictumst.Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapienplacerat ante.Nulla justo.nAliquam quis turpis eget elit sodales scelerisque.Mauris sit amet eros.Suspendisseaccumsan tortor quis turpis.", "tag": "Teal", "url":
		"https://robohash.org/consecteturrerumfacere.png?size=250x250&set=set1", "price": "119.64"
},
{
	"id": 5, "name": "Murphy-Quitzon", "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue,diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.Aliquam erat volutpat.nIncongue.Etiam justo.Etiam pretium iaculis justo.nIn hac habitasse platea dictumst.Etiam faucibus cursus urna.Uttellus.", "tag": "Violet", "url": "https://robohash.org/quosnobisquisquam.jpg?size=250x250&set=set1", "price": "238.43"
},
{
	"id": 6, "name": "Hettinger-Effertz", "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget,congue eget, semper rutrum, nulla.Nunc purus.", "tag": "Khaki", "url":
		"https://robohash.org/acupiditateoccaecati.png?size=250x250&set=set1", "price": "130.34"
},
{
	"id": 7, "name": "Kassulke, Osinski and Blick", "description": "Cras non velit nec nisi vulputate nonummy. Maecenastincidunt lacus at velit.Vivamus vel nulla eget eros elementum pellentesque.nQuisque porta volutpat erat.Quisqueerat eros, viverra eget, congue eget, semper rutrum, nulla.Nunc purus.nPhasellus in felis.Donec semper sapien alibero.Nam dui.", "tag": "Indigo", "url": "https://robohash.org/sapienteeumeaque.png?size=250x250&set=set1", "price":
		"176.77"
},
{
	"id": 8, "name": "Stroman, Frami and Bosco", "description": "Nulla ut erat id mauris vulputate elementum. Nullamvarius.Nulla facilisi.nCras non velit nec nisi vulputate nonummy.Maecenas tincidunt lacus at velit.Vivamus velnulla eget eros elementum pellentesque.nQuisque porta volutpat erat.Quisque erat eros, viverra eget, congue eget,semper rutrum, nulla.Nunc purus.", "tag": "Blue", "url":
		"https://robohash.org/autetmolestiae.png?size=250x250&set=set1", "price": "187.87"
},
{
	"id": 9, "name": "Reinger, Kling and Glover", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec utolor.Morbi vel lectus in quam fringilla rhoncus.nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id,turpis.Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.Mauris lacinia sapien quis libero.nNullam sit amet turpis elementum ligula vehicula consequat.Morbi a ipsum.Integera nibh.", "tag": "Green", "url": "https://robohash.org/numquamsintminus.bmp?size=250x250&set=set1", "price": "172.48"
},
{
	"id": 10, "name": "Schimmel, Renner and Keebler", "description": "Suspendisse potenti. In eleifend quam a odio. In hachabitasse platea dictumst.", "tag": "Teal", "url": "https://robohash.org/occaecatiaid.bmp?size=250x250&set=set1",
	"price": "125.33"
},
{
	"id": 11, "name": "Walsh, Oberbrunner and Wiza", "description": "Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus.Vivamus vestibulum sagittis sapien.Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus.nEtiam vel augue.Vestibulum rutrum rutrum neque.Aenean auctor gravidasem.", "tag": "Teal", "url": "https://robohash.org/nisiporrominima.png?size=250x250&set=set1", "price": "113.83"
},
{
	"id": 12, "name": "Lehner Inc", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor idnulla ultrices aliquet.nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo.Pellentesque viverra pedeac diam.Cras pellentesque volutpat dui.", "tag": "Mauv", "url":
		"https://robohash.org/nostrumplaceatmolestias.bmp?size=250x250&set=set1", "price": "108.11"
},
{
	"id": 13, "name": "Lindgren, Schmitt and Sauer", "description": "Maecenas tristique, est et tempus semper, est quampharetra magna, ac consequat metus sapien ut nunc.Vestibulum ante ipsum primis in faucibus orci luctus et ultricesposuere cubilia Curae; Mauris viverra diam vitae quam.Suspendisse potenti.nNullam porttitor lacus at turpis.Donecposuere metus vitae ipsum.Aliquam non mauris.nMorbi non lectus.Aliquam sit amet diam in magna bibendum imperdiet.Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.", "tag": "Maroon", "url":
		"https://robohash.org/temporibusquasiiusto.bmp?size=250x250&set=set1", "price": "47.51"
},
{
	"id": 14, "name": "Will LLC", "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purussit amet nulla.Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "tag": "Pink", "url":
		"https://robohash.org/laboreplaceatvoluptates.bmp?size=250x250&set=set1", "price": "117.05"
},
{
	"id": 15, "name": "Schiller, Crooks and Hansen", "description": "Integer ac leo. Pellentesque ultrices mattis odio.Donec vitae nisi.", "tag": "Purple", "url": "https://robohash.org/molestiaequivoluptatem.jpg?size=250x250&set=set1",
	"price": "193.23"
},
{
	"id": 16, "name": "Larkin-Hayes", "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.Aliquam non mauris.nMorbi non lectus.Aliquam sit amet diam in magna bibendum imperdiet.Nullam orci pede, venenatisnon, sodales sed, tincidunt eu, felis.nFusce posuere felis sed lacus.Morbi sem mauris, laoreet ut, rhoncus aliquet,pulvinar sed, nisl.Nunc rhoncus dui vel sem.", "tag": "Maroon", "url":
		"https://robohash.org/doloresitaquesaepe.jpg?size=250x250&set=set1", "price": "8.82"
},
{
	"id": 17, "name": "Kertzmann, Beahan and Romaguera", "description": "Suspendisse potenti. In eleifend quam a odio. Inhac habitasse platea dictumst.nMaecenas ut massa quis augue luctus tincidunt.Nulla mollis molestie lorem.Quisque uterat.nCurabitur gravida nisi at nibh.In hac habitasse platea dictumst.Aliquam augue quam, sollicitudin vitae,consectetuer eget, rutrum at, lorem.", "tag": "Green", "url":
		"https://robohash.org/quasirationeet.bmp?size=250x250&set=set1", "price": "141.52"
},
{
	"id": 18, "name": "Denesik, Abshire and Steuber", "description": "In hac habitasse platea dictumst. Morbi vestibulum,velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.Nulla justo.", "tag":
		"Puce", "url": "https://robohash.org/namconsequaturducimus.png?size=250x250&set=set1", "price": "76.22"
},
{
	"id": 19, "name": "Goyette-Murphy", "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquetat, feugiat non, pretium quis, lectus.", "tag": "Puce", "url":
		"https://robohash.org/temporemaximeomnis.png?size=250x250&set=set1", "price": "102.01"
},
{
	"id": 20, "name": "Hilll-Langosh", "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.nAeneanfermentum.Donec ut mauris eget massa tempor convallis.Nulla neque libero, convallis eget, eleifend luctus, ultricieseu, nibh.", "tag": "Pink", "url": "https://robohash.org/autimpeditqui.png?size=250x250&set=set1", "price": "3.83"
},
{
	"id": 21, "name": "Bosco, Kuphal and Luettgen", "description": "Suspendisse potenti. In eleifend quam a odio. In hachabitasse platea dictumst.", "tag": "Green", "url":
		"https://robohash.org/consecteturcorporismolestiae.png?size=250x250&set=set1", "price": "63.24"
},
{
	"id": 22, "name": "Swift Group", "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.In est risus, auctor sed, tristique in, tempus sit amet, sem.nFusce consequat.Nulla nisl.Nunc nisl.", "tag":
		"Fuscia", "url": "https://robohash.org/animiaccusamusnobis.png?size=250x250&set=set1", "price": "84.52"
},
{
	"id": 23, "name": "Lubowitz, Kutch and Ondricka", "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum.Nulla tellus.", "tag": "Red", "url": "https://robohash.org/estquiatemporibus.bmp?size=250x250&set=set1", "price":
		"6.77"
},
{
	"id": 24, "name": "Boehm, White and Bogan", "description": "In hac habitasse platea dictumst. Etiam faucibus cursusurna.Ut tellus.nNulla ut erat id mauris vulputate elementum.Nullam varius.Nulla facilisi.", "tag": "Purple",
	"url": "https://robohash.org/ducimusaliquidearum.bmp?size=250x250&set=set1", "price": "142.06"
},
{
	"id": 25, "name": "Harber LLC", "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.Aliquam non mauris.", "tag": "Green", "url": "https://robohash.org/laboriosambeataequam.jpg?size=250x250&set=set1",
	"price": "116.77"
}]

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Prueba Tienda Online',
			act: 0,
			index: '',
			// products: [],
			searchString: "",
			products: []
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.refs.name.focus();
		this.setState({
			products: products
		});
		this.refs.search.focus();
	}

	handleChange() {
		this.setState({
			searchString: this.refs.search.value
		});
	}

	formCargar = (e) => {
		e.preventDefault();
		console.log('Intentar');

		let products = this.state.products;
		let name = this.refs.name.value;
		let description = this.refs.description.value;
		let tag = this.refs.tag.value;
		let url = this.refs.url.value;
		let price = this.refs.price.value;

		if (this.state.act === 0) { //nuevo
			let data = {
				name, description, tag, url, price
			}
			products.push(data);
		} else { //Actualiza
			let index = this.state.index;
			products[index].name = name;
			products[index].description = description;
			products[index].tag = tag;
			products[index].url = url;
			products[index].price = price;
		}

		this.setState({
			products: products,
			act: 0
		});

		this.refs.miFormulario.reset();
		this.refs.name.focus();
	}

	formRemove = (i) => {
		let products = this.state.products;
		products.splice(i, 1);
		this.setState({
			products: products
		});

		this.refs.miFormulario.reset();
		this.refs.name.focus();
	}

	formEdit = (i) => {
		let data = this.state.products[i];
		this.refs.name.value = data.name;
		this.refs.description.value = data.description;
		this.refs.tag.value = data.tag;
		this.refs.url.value = data.url;
		this.refs.price.value = data.price;

		this.setState({
			act: 1,
			index: i
		});

		this.refs.name.focus();
	}

	render() {

		let _products = this.state.products;
		let search = this.state.searchString.trim().toLowerCase();

		if (search.length > 0) {
			_products = _products.filter(function (user) {
				return user.name.toLowerCase().match(search) + user.tag.toLowerCase().match(search) +
					user.description.toLowerCase().match(search) + user.price.toLowerCase().match(search);
			});
		}

		let products = this.state.products;
		return (



			<div className="App">
				<header className="fixed-top">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1>
									Proyecto de E-Commerce
					</h1>

								<span><a href="http://francoromani.com" target="_blank" rel="noopener noreferrer">@francoromani</a></span>
							</div>
						</div>
					</div>
				</header>

				<main>
					<section className="searcher">
						<div className="container">
							<div className="row">
								<div className="col-md-12">

									<div className="add-or-edit">
										<h2>Agrega o edita un producto</h2>
										<form ref="miFormulario" className="miFormulario">
											<input type="text" ref="name" placeholder="Nombre Producto" />
											<input type="text" ref="description" placeholder="Descripción" />
											<input type="text" ref="tag" placeholder="Etiqueta" />
											<input type="text" ref="url" placeholder="URL Imagen" />
											<input type="text" ref="price" placeholder="Precio" />
											<button onClick={(e) => this.formCargar(e)}>
												Crear o Editar
											</button>
										</form>
									</div>
									<div className="finder">
										<h2>Buscar Producto en toda la tienda</h2>
										<input type="text" value={this.state.searchString} ref="search" onChange={this.handleChange} placeholder="Busca tu producto por: Nombre, Etiqueta, Precio o descripción" />

									</div>

								</div>
							</div>
						</div>

					</section>

					<section className="products">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									{_products.map((data, i) =>
										<div key={i} className="grid">
											<div className="grid-item">
												<h2>{data.name}</h2>
												<img src={data.url} alt="Producto Robot" />
												<div>
													<h3> <b>Descripción: </b> {data.description}
														accusamus omnis at laborum delectus? Maiores reiciendis ad.</h3>
													<div className="tag">
														<b>Etiqueta:</b> {data.tag}
													</div>
													<div className="edit">
														<button onClick={() => this.formRemove(i)} >Eliminar</button>
														<button onClick={() => this.formEdit(i)}>Editar</button>
													</div>
												</div>

												<div className="price">
													<b>Precio</b> <span>${data.price}</span>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer>
					Made by <a href="http://francoromani.com" target="_blank" rel="noopener noreferrer">@francoromani</a> | <a
						href="https://linkedin.com/in/franco-romani-cayo/" target="_blank" rel="noopener noreferrer">@LinkedIn Me</a> | <a
							href="mailto:francoaromani@gmail.com" target="_top" rel="noopener noreferrer">Email Me</a>
				</footer>
			</div>
		);
	}
}



// export default Search;
export default App;
// export default Search;