import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SideNav } from "./SideNav";

// function setup(jsx) {
//     return {
//       user: userEvent.setup(),
//       ...render(jsx),
//     }
//   }

let sideNavState = true;
function closeSideNav(): void {
    sideNavState = false;
}
describe('Sidenav component Should render', () => { 
    test('', () => { 
        render(<SideNav sideState={sideNavState} handleState={closeSideNav}/>)
    
        expect(screen.getByText(/dashboard/i)).toBeInTheDocument()       
     })
 })

 describe('Check if SideNav is', () => {
     test('open', () => {
        render(<SideNav sideState={sideNavState} handleState={closeSideNav}/>)
        const sideContainer = document.getElementsByClassName("MuiPaper-root")
        const styles = window.getComputedStyle(sideContainer[0])
        expect(styles.transform).toBe('none')
     })

     test('closed', () => {
        render(<SideNav sideState={sideNavState} handleState={closeSideNav}/>)
        const sideContainer = document.getElementsByClassName("MuiPaper-root")
        // const button = screen.getByTestId('MenuIcon')
        const button = screen.getAllByRole('button')
        // console.log(button[0])
        userEvent.click(button[0])
        const styles = window.getComputedStyle(sideContainer[0])
        console.log(styles)
        // expect(styles.visibility).toBe('hidden')
     })
 })