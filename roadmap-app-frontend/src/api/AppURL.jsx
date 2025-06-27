class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api";

    static Addideas = this.BaseURL + "/admin/add-ideas";
    static IdeasList = this.BaseURL + "/admin/manage-ideas";
    static DeleteIdeas= this.BaseURL + "/admin/delete-idea";
    static UpdateIdeas = this.BaseURL + "/admin/update-idea";
}
export default AppURL;
