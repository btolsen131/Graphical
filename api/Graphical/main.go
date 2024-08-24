package main

import (
	"Graphical/config"
	"Graphical/database"
	"Graphical/routes"
	"log"
)

func main() {
	// Load config
	config.Load()
	database.ConnectDB()

	// Set up the router
	r := routes.SetupRouter()

	// Start the server
	err := r.Run(config.ServerAddress())
	if err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

