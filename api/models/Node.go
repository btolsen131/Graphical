package models

type Node struct{
	ID       int    `json:"id"`
	Title    string `json:"title"`
	Body     string `json:"body"`
	Children []int  `json:"children"`
}
