const SPREADSHEET_ID = ""
const CLIENT_ID = ""
const API_KEY = ""
const SCOPE = "https://www.googleapis.com/auth/spreadsheets"
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]

const start = () => {
    const feedbackFormEl = document.querySelector(".feedback-form")
    const firstNameEl = document.getElementById("firstName")
    const lastNameEl = document.getElementById("lastName")
    const emailEl = document.getElementById("email")
    const phoneEl = document.getElementById("phone")
    const newsletterEl = document.getElementById("newsletter")
    const yardSignEl = document.getElementById("yardSign")
    const litDropEl = document.getElementById("litDrop")

    feedbackFormEl.addEventListener("submit", el => {
        el.preventDefault()

        console.log("📃 Submitting Form…")
        console.log(`Name: ${firstNameEl.value} ${lastNameEl.value}`)
        console.log(`📧 Email: ${emailEl.value}`)
        console.log(`📞 Phone: ${phoneEl.value}`)
        console.log(`📨 Newsletter: ${newsletterEl.checked ? "Yes" : "No"}`)
        console.log(`Yard Sign: ${yardSignEl.checked ? "Yes" : "No"}`)
        console.log(`Lit Drop: ${litDrop.checked ? "Yes" : "No"}`)

        // Submit data to Google Sheets
        const params = {
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1",
            valueInputOption: "RAW",
            insertDataOption: "INSERT_ROWS",
        }

        const valueRangeBody = {
            majorDimension: "ROWS",
            values: [
                firstNameEl.value,
                lastNameEl.value,
                emailEl.value,
                phoneEl.value,
                newsletterEl.checked ? "Yes" : "No",
                yardSignEl.checked ? "Yes" : "No",
                litDrop.checked ? "Yes" : "No",
            ],
        }

        // gapi.load("client:auth2", initClient)

        gapi.client
            .init({
                apiKey: API_KEY,
                // clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPE,
            })
            .then(
                () => {
                    // Sign in
                    // gapi.auth2.getAuthInstance().signIn()
                    gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody).then(
                        function (response) {
                            console.log(response.result)
                        },
                        function (reason) {
                            console.error(`Error: ${reason.result.error.message}`)
                        }
                    )
                    // gapi.auth2.getAuthInstance().signOut()
                },
                function (error) {
                    console.error(JSON.stringify(error, null, 2))
                }
            )

        // gapi.client
        //     .init({
        //         apiKey: API_KEY,
        //         clientId: CLIENT_ID,
        //         discoveryDocs: DISCOVERY_DOCS,
        //         scope: SCOPE,
        //     })
        //     .then(
        //         () => {
        //             // Listen for sign-in state changes.
        //             gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

        //             // Handle the initial sign-in state.
        //             updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())

        //             // Sign in
        //             gapi.auth2.getAuthInstance().signIn()

        //             // Sign out
        //             gapi.auth2.getAuthInstance().signOut()
        //         },
        //         function (error) {
        //             console.error(JSON.stringify(error, null, 2))
        //         }
        //     )
    })
}

gapi.load("client", start)

// initClient = () => {}

// updateSigninStatus = isSignedIn => {
//     if (isSignedIn) {
//         console.log("Signed in")

//         // listMajors()
//     } else {
//         console.log("signed out")
//     }
// }

// handleClientLoad = () => {
//     gapi.load("client:auth2", initClient)
// }
