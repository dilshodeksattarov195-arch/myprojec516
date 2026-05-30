const searchVenderConfig = { serverId: 637, active: true };

const searchVenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_637() {
    return searchVenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchVender loaded successfully.");