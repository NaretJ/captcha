function Captcha(pattern , opearator , leftoperand ,rightoperand){

  this.generate = () =>{
    if(pattern === 1){
        return leftoperand + ' ' + Operator(opearator) + ' ' + Rightoperand(rightoperand);
      }
    else{
        return Leftoperand(leftoperand) + ' ' + Operator(opearator) + ' ' + rightoperand;
    }
  }
}
function Operator(opearator){
  let opearatortostring = ['+','-']
  return opearatortostring[opearator-1];
}
function Leftoperand(leftoperand){
  let valuetostring = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
  return valuetostring[leftoperand];
}
function Rightoperand(rightoperand){
  let valuetostring = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
  return valuetostring[rightoperand];
}

describe('Captcha App',() => {
	describe('Pattern 1',() => {
    const pattern = 1  /*เป็นการกำหนดค่าคงที่ห้ามเปลี่ยนแปลงค่า*/
    it('should return "2 + FIVE" when input is 1,1,2,5',() =>{
      expect(createApp(pattern,1,2,5).generate()).toEqual('2 + FIVE')
    })
    it('should return "3 - SIX" when input is 1,2,3,6',() =>{
      expect(createApp(pattern,2,3,6).generate()).toEqual('3 - SIX')
    })
	})
  describe('Pattern 2',() => {
    const pattern = 2
    it('should return "THREE + 7" when input is 2,1,3,7',() =>{
      expect(createApp(pattern,1,3,7).generate()).toEqual('THREE + 7')
    })
    it('should return "FOUR - 1" when input is 2,2,4,1',() =>{
      expect(createApp(pattern,2,4,1).generate()).toEqual('FOUR - 1')
    })
  })
})
function createApp(pattern ,opearator , leftOperand ,RightOperand){
	return new Captcha(pattern , opearator , leftOperand ,RightOperand)
}
