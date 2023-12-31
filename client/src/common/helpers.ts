export function convertMiddleNameToInitial(middleName: string) {
    if (middleName && middleName.length > 0) {
      return middleName.charAt(0).toUpperCase() + ".";
    } else {
      // Return an empty string or another appropriate value if there's no middle name
      return "";
    }
  }


  export function getFullname(firstname: string, middlename: string, lastname: string){
    return lastname + ', ' + firstname + ' ' + convertMiddleNameToInitial(middlename)
  }