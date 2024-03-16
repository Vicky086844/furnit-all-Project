import { Client, Account, ID } from "appwrite";
import conf from "./conf";
// save this code you can use any where this is pure i think 
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method here
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }




    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("appwrite service :: getCurrentUser:: error", error)
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService();

export default authService;