package controllers

import (
	"Graphical/database"
	"Graphical/models"
	"net/http"
	"github.com/gin-gonic/gin"
  "strings"
  "strconv"
)

type dbNode struct {
  ID int
  Title string
  Body string
  Children string
}

func GetNodes(c *gin.Context){
	db := database.GetDB()

	var rawNodes []dbNode

	result := db.Raw("Select id, title, body, children from notes").Scan(&rawNodes)

	if result.Error != nil {
	c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	return
	}

  var nodes []models.Node
  for _, raw := range rawNodes {
    var children []int
    if raw.Children != "" {
      childStrs := strings.Split(raw.Children, ",")
      for _, childStr := range childStrs {
        childID, err := strconv.Atoi(childStr)
        if err == nil {
          children = append(children, childID)
        }
      }
    }

    node := models.Node{
      ID:raw.ID,
      Title:raw.Title,
      Body:raw.Body,
      Children: children,
    }

    nodes = append(nodes, node)
  }

	c.JSON(http.StatusOK, nodes)
}

