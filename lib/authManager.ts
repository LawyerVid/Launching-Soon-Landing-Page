import { AuthStatusValidationType } from "./navbarButtons"

export enum ROLE {
    USER = 'USER',
    ATTORNEY = 'ATTORNEY',
    ADMIN = 'ADMIN',
    BANNED = 'BANNED',
    EMPLOYEE = 'EMPLOYEE'
};

export class AuthManager {
    role: ROLE | null = null
    isAuthenticated: boolean = false
    isAdmin: boolean = false
    constructor(public session: null) {
        this.role = null
        this.isAuthenticated = false
        // TODO: Check if this role is even being set.
        this.isAdmin = false
    }
    validateAuthStatus(status: AuthStatusValidationType): boolean {
        if (status === "Any") {
            return true
        }
        if (status === "Admin") {
            return this.isAdmin
        }
        if (status === "Validated-Any") return this.isAuthenticated
        if (status === "Unauthenticated") return !this.isAuthenticated
        if (status === "Authenticated-Lawyer") return Boolean(this.isAuthenticated && this.role === "ATTORNEY")
        return false
    }
}
