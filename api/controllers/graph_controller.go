package controllers

import (
	"Graphical/database"
	"Graphical/models"
	"net/http"
	"github.com/gin-gonic/gin"
  "strings"
  "strconv"
  "fmt"
)

type dbNode struct {
  ID int
  Title string
  Body string
  Children string
}

type input struct {
  Title string `json:"title" binding:"required"`
  Body string  `json:"body"`
  Children []int  `json:"children"`
}

func AddNode(c *gin.Context){
  var requestData input
  err := c.ShouldBindJSON(&requestData)
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
    return
  }

  var childrenStr string
  if requestData.Children != nil {
    childrenStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(requestData.Children)), ","), "[]")
  } else {
    childrenStr = ""
  }

	query := `INSERT INTO notes (title, body, children) VALUES ($1, $2, $3) RETURNING id`
	fmt.Printf("Executing query: %s with params: %v", query, []interface{}{requestData.Title, requestData.Body, childrenStr})
	db := database.GetDB()
	var newID int
	result := db.Raw(query, requestData.Title, requestData.Body, childrenStr).Scan(&newID)

  if result.Error != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
    return
  }

  c.JSON(http.StatusOK, gin.H{"status":"Note added successfully", "id": newID})
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

