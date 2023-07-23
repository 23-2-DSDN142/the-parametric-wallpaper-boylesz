//your parameter variables go here!
let flower_width  = 50;
let flower_height = 50;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(147, 217, 219); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(245, 125, 215);
  ellipse(100, 100, flower_width * 0.75, flower_height * 3)
  ellipse(100, 100, flower_width * 3, flower_height * 0.75)

  fill(242, 255, 59);
  push();
  translate(100, 100);
  rotate(45);
  ellipse(0, 0, flower_width * 0.75, flower_height * 3)
  ellipse(0, 0, flower_width * 3, flower_height * 0.75)
  pop();

  fill(255, 254, 230);
  ellipse(100, 100, flower_width, flower_height);
}
