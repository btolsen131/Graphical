package routes

import (
	"Graphical/controllers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/nodes", controllers.GetNodes)
	r.POST("/node/add", controllers.AddNode)

	return r
}
