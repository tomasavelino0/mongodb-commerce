db.produtos.find(
    { nome: { $not: { $in: ["Big Mac", "McChicken"] } },
    }, { nome: 1, vendidos: 1, curtidas: 1, _id: 0 }, 
 );