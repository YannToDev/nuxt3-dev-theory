// composables pour les différentes catégories de notre site

export const useCategories =() =>{

    return useState('categories', ()=>
        [
            {id:'head', title:'tête'},
            {id: 'body', title:'Hauts'},
            {id:'other', title:'Autres'}
        ]
    )
}
