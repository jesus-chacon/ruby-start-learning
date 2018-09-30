import user from "./user";
import offer from "./offer";
import charge from "./charge";

export default ({
    ...user,
    ...offer,
    ...charge
});