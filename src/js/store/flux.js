const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			hola: "Game of thrones APP"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				//to use an action inside the actions
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store inside of an action 
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: (item) => {
				const store = getStore();

				// setStore({...store, favorites: [...store.favorites, item]}) NOOT NECESSARY 
				if(!store.favorites.includes(item)){
					setStore({favorites: [...store.favorites, item]}) //enough: object and property to modify
				}
				console.log(store)
			},
			removeFavorite: (person) => {
				const store = getStore();

				const favoritesUpdated = store.favorites.filter((character) => {
					return character.id !== person.id 
				})
				setStore({favorites: favoritesUpdated})//favoritesUpdated is already an array, no need to place inside [] again. 
			}
		}
	};
};

export default getState;
