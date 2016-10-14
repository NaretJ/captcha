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
    it('should return "5 + SEVEN" when input is 1,1,5,7',() =>{
      expect(createApp(pattern,1,5,7).generate()).toEqual('5 + SEVEN')
    })
    it('should return "9 + TWO" when input is 1,1,9,2',() =>{
      expect(createApp(pattern,1,9,2).generate()).toEqual('9 + TWO')
    })
    it('should return "0 - EIGHT" when input is 1,2,0,8',() =>{
      expect(createApp(pattern,2,0,8).generate()).toEqual('0 - EIGHT')
    })
    it('should return "4 + THREE" when input is 1,1,4,3',() =>{
      expect(createApp(pattern,1,4,3).generate()).toEqual('4 + THREE')
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
    it('should return "NINE - 0" when input is 2,2,9,0',() =>{
      expect(createApp(pattern,2,9,0).generate()).toEqual('NINE - 0')
    })
    it('should return "ONE - 8" when input is 2,2,1,8',() =>{
      expect(createApp(pattern,2,1,8).generate()).toEqual('ONE - 8')
    })
    it('should return "ZERO + 6" when input is 2,1,0,6',() =>{
      expect(createApp(pattern,1,0,6).generate()).toEqual('ZERO + 6')
    })
    it('should return "EIGHT - 2" when input is 2,2,8,2',() =>{
      expect(createApp(pattern,2,8,2).generate()).toEqual('EIGHT - 2')
    })
    it('should return "SEVEN - 4" when input is 2,2,7,4',() =>{
      expect(createApp(pattern,2,7,4).generate()).toEqual('SEVEN - 4')
    })
    it('should return "SIX + 3" when input is 2,1,6,3',() =>{
      expect(createApp(pattern,1,6,3).generate()).toEqual('SIX + 3')
    })
    it('should return "FIVE + 5" when input is 2,1,5,5',() =>{
      expect(createApp(pattern,1,5,5).generate()).toEqual('FIVE + 5')
    })
    it('should return "TWO - 9" when input is 2,2,2,9',() =>{
      expect(createApp(pattern,2,2,9).generate()).toEqual('TWO - 9')
    })
  })
})
function createApp(pattern ,opearator , leftOperand ,RightOperand){
	return new Captcha(pattern , opearator , leftOperand ,RightOperand)
}
