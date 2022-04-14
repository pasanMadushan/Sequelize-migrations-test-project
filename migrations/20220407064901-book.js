/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Books",{
      id:{
        type: Sequelize.INTEGER,
        notNull: true,
        primaryKey:true
      },
      bookName:{
        type:Sequelize.STRING
      },
      authorName:{
        type:Sequelize.STRING
      },
      publishYear:{
        type: Sequelize.INTEGER
      },
      isAvailable:{
        type    :Sequelize.BOOLEAN,
        default :true
      },
      rackId:{
        type    :Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Book_rack',
            schema:'book_racks'
          },
          key:'id'
        }
      },
      createdAt: {
        type:Sequelize.DATE
      },
      updatedAt: {
        type:Sequelize.DATE
      },
    }

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Books")
  }
};
