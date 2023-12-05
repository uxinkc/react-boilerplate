
import { useNavigate } from "react-router-dom";
import { useGoogleAnalytics } from "@inf/hooks/useGoogleAnalytics";

export function useNavigation() {

  const trackerName = 'Navigate To';
  
  const navigate  = useNavigate();
  const { sendToGA } = useGoogleAnalytics();

  const goto = (_path, _target='') => {
    if(_path.includes('http')){
      if(_target=='_blank') window.open(_path, _target);
      else window.location.href = _path;
    } else {
      //sendToGA('Page Path', trackerName, _path);
      console.log('navigate to...',_path)
      navigate(_path)
    }
  }

  return {
    goto
  }
}