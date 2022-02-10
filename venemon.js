class Venemon
{
  constructor(name, life, attack, defense, speed, range)
  {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.range = range;
    this.image = new Image();
    this.image.src = images[this.name];
  }

  talk()
  {
    alert(this.name);
  }

  show()
  {
   
    var newDiv = document.createElement("div");
    var divHeader = document.createElement("h2");
    divHeader.innerHTML = this.name;    
    var nextLine = document.createElement("br");
    newDiv.appendChild(this.image);
    newDiv.appendChild(divHeader);
    document.body.appendChild(newDiv); 

    // Crear JSON para guardar los atributos del Venemón

    var array = 
    {
      "Life": this.life,
      "Attack": this.attack,
      "Defense": this.defense,
      "Speed": this.defense,
      "Range": this.range
    }

    // Tabla de carácteristicas de cada Venemón
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for (var element in array)
    {
      var rowText = "<td>" + element + ":</td>" + "<td>" + array[element] + "</td>";
      var row = document.createElement("tr");
      row.innerHTML = rowText;
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    newDiv.appendChild(table);

    // Botón para seleccionar al Venemón
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "select");
    button.setAttribute("id", this.name);
    button.setAttribute("class", "buttonSelect");
    newDiv.appendChild(nextLine);
    newDiv.appendChild(button);

  }
}