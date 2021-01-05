package main

import (
	"flag"
	"log"

	"project/webserver"

	"github.com/asdine/storm"
)

func main() {

	/* Getting parameters */
	dev := flag.Bool("dev", false, "Dev mode : use the folder './src/project/gui/out/' as gui")
	flag.Parse()

	/* Database */
	db, err := storm.Open("/etc/project/project.db")
	if err != nil {
		log.Println("Can't open database")
	}

	/* Webserver */
	s := webserver.New(db, *dev)
	err = s.Run()
	if err != nil {
		log.Println(err)
	}
}
