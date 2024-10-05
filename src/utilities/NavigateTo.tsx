import { useNavigate } from "react-router-dom";

const NavigateTo = (path: string) => {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate(path);
  };

  return navigateToPath;
};

export default NavigateTo;
