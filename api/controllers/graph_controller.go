package controllers

import (
	"Graphical/database"
	"Graphical/models"
	"net/http"
	"github.com/gin-gonic/gin"
)

func GetNodes(c *gin.Context){
	db := database.GetDB()

	var rawNodes []models.Node

	result := db.Find(&rawNodes)

	if result.Error != nil {
	c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	return
	}

	c.JSON(http.StatusOK, rawNodes)
}

