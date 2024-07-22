import { DataTypes, UUIDV4 } from "sequelize";

const MeetingModel = (sequelize) => {
  sequelize.define(
    "Meeting",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      who: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      when: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      since: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      until: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      about: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};

export default MeetingModel;
