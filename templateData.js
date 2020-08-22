const templateData = {
    "Home": {
        title: `Home`,
        navType: "main",
        main: `Home Main`
    },
    "Tables": {
        title: `Tables`,
        navType: "main",
    n: `
        <div class="container">
        <div class="jumbotron">
            <h1>Jaleo</h1>
            <hr>
            <h2 class="text-center">Current Reservations and Waiting List</h2>
            <br>
            <div class="text-center">
                <a href="/Reserve"><button type="button"> Make Reservation</button></a>
                <a href="/"><button type="button">Home</button></a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <!-- Current Tables in Use -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">Current Reservations</h4>
                    </div>
                    <section class="panel-body" id="tableSection">
                    </section>
                </div>
                <!-- Waiting List Panel -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">Waiting List</h4>
                    </div>
                    <section class="panel-body" id="waitlistSection">
                    </section>
                </div>
            </div>
        </div>
`
    },
    "Reserve": {
        title: `Reserve a table`,
        navType: "main",
        main: `
    <div class="container">
        <div class="jumbotron">
            <h1 class="text-center"><span class="glyphicon glyphicon-fire"></span> Jaleo</h1>
            <hr>
            <h2 class="text-center">Reserve now!</h2>
            <br>
            <div class="text-center">
                <a href="Tables"><button type="button" class="btn btn-lg btn-primary">View
                        Tables</button></a>
                <a href="/"><button type="button" class="btn btn-lg btn-default">Return Home</button></a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <!-- Reservation Page -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">Table Reservation</h4>
                    </div>
                    <div class="panel-body">
                        <form role="form" lpformnum="1">
                            <div class="form-group">
                                <label for="reserve_name">Name</label>
                                <input type="text" class="form-control" id="reserve_name" name="name" );>
                            </div>
                            <div class="form-group">
                                <label for="reserve_phone">Phone Number</label>
                                <input type="text" class="form-control" id="reserve_phone" name="phone">
                            </div>
                            <div class="form-group">
                                <label for="reserve_email">Email</label>
                                <input type="text" class="form-control" id="reserve_email" name="email">
                            </div>
                            <div class="form-group">
                                <label for="reserve_party">How Many People in your party?</label>
                                <input type="integer" class="form-control" id="reserve_party" name="party">
                            </div>
                            <div class="form-group">
                                <label for="reserve_uniqueID">Unique ID</label>
                                <input type="text" class="form-control" id="reserve_uniqueID" name="id">
                            </div>
                            <button type="submit" class="btn btn-primary submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    },
    "Error": {
        title: "Oops",
        navType: "none",
        main: `<div class="card mt-6 px-6 py-6"><h1 class="text-danger">Issue... 404ish</h1></div>`
    }
};

module.exports = templateData;