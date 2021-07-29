function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" type="text/css" href="./style.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    <body>
    
        <header>
            <h1>Team Profile</h1>
        </header>
        
        <main>
        <div class='row justify-content-center'>
           <article class='card card-body col-12 col-md-3 m-2 shadow tile' style='width: 20rem'>
                <h3 class='card-title'>${data[0].name}</h2>
                <h3 class='card-subtitle'>Manager</h3>
                <ul class='list'>
                    <li class='list-group-item'>ID: ${data[0].id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${data[0].email}'>${data[0].email}</a></li>
                    <li class='list-group-item'>Office Number: ${data[0].officeNumber}</li>
                </ul>
            </article>
            
            <article class='card card-body col-12 col-md-3 m-2 shadow tile' style='width: 20rem'>
                <h3 class='card-title'>${data[1].name}</h2>
                <h3 class='card-subtitle'>Engineer</h3>
                <ul class='list'>
                    <li class='list-group-item'>ID: ${data[1].id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${data[1].email}'>${data[1].email}</a></li>
                    <li class='list-group-item'>github: <a href="https://github.com/${data[1].github}" target="_blank" title="Link to engineer's GitHub profile">${data[1].github}</a></li>
                </ul>
            </article>
            
            <article class='card card-body col-12 col-md-3 m-2 shadow tile' style='width: 20rem'>
                <h3 class='card-title'>${data[2].name}</h2>
                <h3 class='card-subtitle'>Engineer</h3>
                <ul class='list'>
                    <li class='list-group-item'>ID: ${data[2].id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${data[2].email}'>${data[2].email}</a></li>
                    <li class='list-group-item'>github: <a href="https://github.com/${data[2].github}" target="_blank" title="Link to engineer's GitHub profile">${data[2].github}</a></li>
                </ul>
            </article>

            <article class='card card-body col-12 col-md-3 m-2 shadow tile' style='width: 20rem'>
                <h3 class='card-title'>${data[3].name}</h2>
                <h3 class='card-subtitle'>Intern</h3>
                <ul class='list'>
                    <li class='list-group-item'>ID: ${data[3].id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${data[3].email}'>${data[3].email}</a></li>
                    <li class='list-group-item'>college: ${data[3].school}</li>
                </ul>
            </article>

            <article class='card card-body col-12 col-md-3 m-2 shadow tile' style='width: 20rem'>
                <h3 class='card-title'>${data[4].name}</h2>
                <h3 class='card-subtitle'>Intern</h3>
                <ul class='list'>
                    <li class='list-group-item'>ID: ${data[4].id}</li>
                    <li class='list-group-item'>email: <a href='mailto:${data[4].email}'>${data[4].email}</a></li>
                    <li class='list-group-item'>college: ${data[4].school}</li>
                </ul>
            </article>
        </div>
        </main>
        
    </body>
    </html>`
}

module.exports = generateHTML;