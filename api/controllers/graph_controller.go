package controllers

import (
	"Graphical/database"
	"net/http"
	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context){
	db := database.GetDB()

	var usernames []string

	result := db.Raw("SELECT username FROM test").Scan(&usernames)
	
	if result.Error != nil {
	c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	return
	}

	c.JSON(http.StatusOK, usernames)
}

