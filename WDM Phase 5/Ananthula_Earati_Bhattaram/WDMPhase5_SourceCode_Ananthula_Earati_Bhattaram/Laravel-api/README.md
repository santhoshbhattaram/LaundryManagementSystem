**_VINEETH KUMAR ANANTHULA - 1001953922
PAVANI EARATI – 1001953926
SAI SANTHOSH BHATTARAM – 1001874167_**

## Environment Setup:
## Setup Laravel using the below commnads:
    composer create-project laravel/laravel larvel
    cd laravel
    composer require laravel/ui
    php artisan ui react
    npm install -> to install node 
Also run npm install at React for installing the packages.

The database dump has been provided in the submission, Please  import the data in phpmyadmin(MYSQL) & 
start the application.


## .env file  we should setup the database details. please refer below example for setting up database connections.DB_DATABASE-> DB Name ,DB_USERNAME->User Name, DB_PASSWORD-> Password

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sxb4167_wdm
DB_USERNAME=root
DB_PASSWORD=

## Models: Models should be setup with table(fields).Please find a sample for creating the model.
class BillDetails extends Model
{
    public $timestamps = false;
    protected $table='bill_details';
    protected $fillable=[
        'Bill_Id',
        'Order_ID','TotalCost'
    ];
}

## Controllers: In controller we do backend CRUD operations[api calls],Please find a sampe for creating a controller.

    public function insertequipment(Request $request)
    {
        $result=DB::select('select Equipment_ID  from Equipment order by Equipment_ID   desc limit 1');       
        $last_id=$result[0]->Equipment_ID;
        $last_id=$last_id+1;
        $EName=$request->input('EName');
        $EType=$request->input('EType');
        $equipment=new Equipment();
        $equipment->Equipment_ID=$last_id;
        $equipment->EquipmentName=$EName;
        $equipment->EquipmentType=$EType;
        $equipment->Status='Active';  
        $equipment->save(); 
        echo json_encode(["einsert"=>1]);       
    }

## Routes: We have define the routes for calling the api. Please find the details 
EX: Route::post('/insertequipment',[ManageController::class,'insertequipment']);


Now we will integrate to the view or front end application by calling the api's created with axios.

## Chat: Chat has beeen developed using Nodejs & Socket io for asynchronous communication. As react application will be running on port 3000, we are listening all the messages sent on port-3000. 

Chat will have two components-> Client and server, Server will be running on node & listening to port 3000, when client makes a request to server for a given room, the messages will be broadcasted to all the members joined in that room.


Please use below credentials if the data is imported from submitted dump.
###### Visitor Credentials

Username - 'dummy@gmail.com'
Password - 'dummy12345'

### Manager Credentials

Username: rohithram150@gmail.com  
Pasword: mbjr@2108

### Admin Credentials:

User Name: admin@instawash.com	
Password : admin12345

## User Credentials

User Name: santhoshbhattaram@gmail.com
Password: mbjr@2018

