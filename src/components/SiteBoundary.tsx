import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Mark } from './Visuals';

export class SiteBoundary extends Component<{children:ReactNode},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  componentDidCatch(error:Error,info:ErrorInfo){console.error('CENTAURA view could not load',error,info.componentStack);}
  render(){return this.state.failed?<section className="view-recovery container" role="alert"><Mark/><span className="eyebrow">LET’S RETURN TO YOUR AURA</span><h1>A moment to reconnect.</h1><p>Your saved bag remains on this device. Reload the page to continue.</p><button className="button button-dark" onClick={()=>window.location.reload()}>Reload this page</button><a className="text-link" href="/">Return to the house</a></section>:this.props.children;}
}

export function ViewLoading(){return <div className="view-loading container" role="status" aria-live="polite"><Mark/><span className="micro">Opening your next world…</span></div>;}
