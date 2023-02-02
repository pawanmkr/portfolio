package main

import (
	f "fmt"
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static/")))
	http.HandleFunc("/projects", projectsHandler)
	http.HandleFunc("/contact", contactHandler)

	// starting the server
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("failed to start the server: ", err)
	} else {
		f.Printf("server running... at http://localhost:8080 \n")
	}
}

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	f.Print("projects route opened")
	http.ServeFile(w, r, "./static/projects.html")
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	f.Print("route opened")
	http.ServeFile(w, r, "./static/contact.html")
}
