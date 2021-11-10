import App from "../App";
import {screen, render} from "@testing-library/react";


test('Header renders "Automated Accolades" as title', () => {
    render(<App />);
    const headerTitle = screen.getByText("Automated Accolades");
    expect(headerTitle).toBeInTheDocument();
  });

  
