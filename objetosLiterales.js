//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  // Creamos el objeto "banco"
  let banco = {
    clientes: arrayCuentas,
    
    // Método para consultar un cliente por su nombre
    consultarCliente: function(titularCuenta){
        for (let clientes of this.clientes){
            if(clientes.titularCuenta === titularCuenta){
                return clientes;
            }
        } return null;  // Retorna null si no se encuentra el cliente
    }, 
    // Método para realizar un depósito
  depósito: function(titular, cantidad) {
    let cliente = this.consultarCliente(titular);
    if (cliente) {
      cliente.saldoEnPesos += cantidad;
      console.log("Depósito realizado, su nuevo saldo es: " + cliente.saldoEnPesos);
    } else {
      console.log("Cliente no encontrado.");
    }
  },
      // Método para realizar una extracción
  extracción: function(titular, monto) {
    let cliente = this.consultarCliente(titular);
    if (cliente) {
      if (cliente.saldoEnPesos >= monto) {
        cliente.saldoEnPesos -= monto;
        console.log("Extracción realizada correctamente, su nuevo saldo es: " + cliente.saldoEnPesos);
      } else {
        console.log("Fondos insuficientes.");
      }
    } else {
      console.log("Cliente no encontrado.");
    }
  }
};

  let clienteEncontrado = banco.consultarCliente("Jarret Lafuente");
  console.log(clienteEncontrado);

  banco.depósito("Jarret Lafuente", 2000);

  banco.extracción("Jarret Lafuente", 500);