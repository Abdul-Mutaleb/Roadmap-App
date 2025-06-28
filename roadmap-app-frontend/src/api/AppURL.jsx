class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api";

    static Addideas = this.BaseURL + "/admin/add-ideas";
    static IdeasList = this.BaseURL + "/admin/manage-ideas";
    static DeleteIdeas= this.BaseURL + "/admin/delete-idea";
    static UpdateIdeas = this.BaseURL + "/admin/update-idea";
    static UserRegister = this.BaseURL+"/register";
    static Login = this.BaseURL+"/login";
    static Logout = this.BaseURL + "/logout";
    static TotalUsers = this.BaseURL + "/admin/total-users";
    static TotalIdeas = this.BaseURL + "/admin/total-ideas";
    
}
export default AppURL;
