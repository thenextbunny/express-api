const express = require("express");
const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

// Rotas, ou, end points
// 2 - POST
app.post("/createproduct", (request, response) => {
	const name = request.body.name;
	const price = request.body.price;

	// ERRO STATUS
	if (!name) {
		response.status(422).json({ message: "O campo nome é obrigatório!" });
	}

	console.log(name, price);

	response.status(201).json({ message: `O produto ${name} com o valor de ${price} foi criado com sucesso` });
});

// 1 - GET
app.get("/", (request, response) => {
	response.status(200).json({ message: "Primeira rota criada com sucesso :)" }); // É renderizado no navegador com {"message":"Primeira rota criada com sucesso :)"}
});

app.listen(4000);
