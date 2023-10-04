
                                       Biometric Time Clock API     
                         Une API RESTful en Node.js pour gérer une horloge biométrique.      
                        
                                                    Introduction
                                                    
Ce projet consiste en une API Node.js permettant de gérer une horloge biométrique. L'API offre les fonctionnalités suivantes :
   
1-Ajouter un employé  


2-Récupérer tous les employés  


3-Récupérer les employés en fonction de leur date de création


4-Enregistrer l'heure d'arrivée d'un employé (Check-in)


5-Enregistrer l'heure de départ d'un employé (Check-out) avec calcul de la durée de travail



                                                Technologies utilisées

                                                
                                                
1-Base de données : MongoDB


2-Outil de visualisation de la base de données : MongoDB Compass


3-Framework de l'API : Node.js avec Express.js


4-Tests de l'API : Postman


5-Documentation de l'API : Swagger


6-Tests unitaires : Jest



                                                Instructions d'installation

                                                

                                                
1-Pour exécuter les tests unitaires, utilisez la commande suivante : "npm test"


2-Pour démarrer le serveur, utilisez l'une des commandes suivantes : "npm run dev"   ou " nodemon server.js "


(Assurez-vous que MongoDB est en cours d'exécution et que vous avez la bonne chaîne de connexion)



                                                   Utilisation de l'API

                                                   

1-Endpoint pour ajouter un employé :


URL : http://localhost:8000/addemployer


Méthode : POST


Exemple de corps de la requête :


json


Copy


{
  "_id": "1996",
  "lastName": "mekhalfia",
  "firstName": "zakaria",
  "dateCreated": "2023-5-4",
  "department": "IT"
}



2-Endpoint pour récupérer tous les employés :


URL : http://localhost:8000/getEmployees


Méthode : GET




3-Endpoint pour récupérer les employés en fonction de leur date de création :


URL : http://localhost:8000/getEmployeesByDateCreated


Méthode : GET


Paramètres requis :


dateCreated : Date de création au format YYYY-MM-DD (par exemple, 2023-10-04)



4-Endpoint pour enregistrer l'heure d'arrivée d'un employé (Check-in) :


URL : http://localhost:8000/checkInEmployee


Méthode : POST


Exemple de corps de la requête :


json
Copy


{
  "employeeID": "212",
  "commentCheckout": "votre_commentaire_de_check-out"
}



5-Endpoint pour enregistrer l'heure de départ d'un employé (Check-out) :


URL : http://localhost:8000/checkOutEmployee


Méthode : POST


Exemple de corps de la requête :


json
Copy


{
  "employeeID": "212",
  "commentCheckout": "votre_commentaire_de_check-out"
}




                                              Connexion à MongoDB Compass

                                              
                                              
Pour visualiser la base de données dans MongoDB Compass, utilisez la chaîne de connexion suivante :



Copy


"mongodb+srv://ZAKARIAYASSIR:n8pnscag@cluster1.n5g8a7m.mongodb.net/?retryWrites=true&w=majority"





                         
                         

