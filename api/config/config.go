package config


var (
	Host     = "localhost"
	Port     = "5432"
	User     = "" //Removed for github
	Password = "" //Removed for github
	DBName   = "GraphicalDB"
)

func ServerAddress() string {
	return "localhost:8080"
}

func Load(){

}
