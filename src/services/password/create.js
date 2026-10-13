import chalk from "chalk"
import handle from "./handle.js"

const createPassword = async () => {
    console.log(chalk.green("Password"))
    const password = await handle()
    console.log(password)
}

export default createPassword