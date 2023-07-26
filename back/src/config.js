module.exports = {
    questions: [
        "SELECT COUNT (*) FROM sishab WHERE txt_tipologia = 'Apartamento'",
        "SELECT COUNT (*) FROM sishab WHERE txt_tipologia = 'Casa'",
        "SELECT COUNT (*) FROM sishab WHERE txt_tipologia = 'Casa Sobreposta'",
        "SELECT COUNT (*) FROM sishab WHERE txt_programa = 'PMCMV'",
        "SELECT COUNT (*) FROM sishab WHERE txt_programa = 'PCVA'",
        "SELECT txt_uf , COUNT (*) AS quantidade FROM sishab GROUP BY txt_uf ORDER BY COUNT (*) DESC",
        "SELECT COUNT (*) txt_situacao_obra FROM sishab WHERE txt_situacao_obra = 'Obras Entregues' OR txt_situacao_obra = 'Obras Concludas'",
        "SELECT SUM(CAST(qtd_uh_entregues AS INT)) FROM sishab",
        "SELECT SUM(CAST(qtd_uh_contratadas AS INT)) FROM sishab",
        "SELECT COUNT(*) FROM sishab WHERE vlr_contrapartida <>'0,00' AND vlr_contrapartida IS NOT NULL;",
    ],
    user: (user, pass, email) => {
        create: `INSERT INTO accounts(username, password, email) VALUES( ${user}, ${pass}, ${email} )`;
    },
    helpers: {
        estados: "SELECT DISTINCT txt_uf FROM sishab ORDER BY txt_uf"
    }
};


function f()