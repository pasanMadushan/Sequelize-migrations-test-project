/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

let schemaList = ["book_racks", "book_racks_2"]

function createTables(queryInterface,Sequelize){
  let promiseList = []
  for (let dbschema of schemaList){
    promiseList.push(
      queryInterface.createTable("Book_rack",{
        id:{
          type: Sequelize.INTEGER,
          notNull: true,
          primaryKey:true
        },
        rackName:{
          type:Sequelize.STRING
        }
      }, {
        schema:dbschema
      }
      )
    )
  }
  return promiseList
}

function dropTables(queryInterface,Sequelize){
  let promiseList = []
  for (let dbschema of schemaList){
    console.log(dbschema)
    promiseList.push(
      queryInterface.dropTable({tableName:"Book_rack",schema:dbschema})
    )
  }
  return promiseList
}


module.exports = {

  up:(queryInterface, Sequelize)=> {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all(createTables(queryInterface,Sequelize))
    })
  },

  down: (queryInterface, Sequelize)=> {
    return queryInterface.sequelize.transaction(t=>{
      return Promise.all(dropTables(queryInterface,Sequelize))
    })
  }
};
