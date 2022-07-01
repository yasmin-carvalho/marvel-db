export function setAsTouched(element: any): void {
  if (element) {
    if (element.controls) {
      if (element.controls.length) {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < element.controls.length; index++) {
          Object.keys(element.controls[index].controls).forEach(key => {
            if (!element.controls[index].controls[key].touched) {
              return element.controls[index].controls[key].markAsTouched();
            }
          });
        }
      } else {
        Object.keys(element.controls).forEach(key => {
          if (!element.controls[key].touched) {
            return element.controls[key].markAsTouched();
          }
        });
      }
    } else if (element.length) {
      element.forEach((item: any) => {
        item.formControl.markAsTouched();
      });
    } else {
      element.formControl.markAsTouched();
    }
  }
}

