const regex = /(\d{2}):(\d{2}):(\d{2})/;

export abstract class TempoHelper {
  public static convertToSeconds(tempo: string) {
    if(regex.test(tempo)){
      const tempoGroup = <RegExpExecArray>regex.exec(tempo);
      return (Number(tempoGroup[1]) * 3600) + (Number(tempoGroup[2]) * 60) + Number(tempoGroup[3]);
    } else {
      return 0;
    }
  }
}