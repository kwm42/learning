package learning11;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class AspectModule {
	
	
	/**
	 * declare a pointcut 
	 * match all methods in Student within package learning11 
	 */
	@Pointcut("execution(* learning11.Student.*(..))")
	private void studentAll() {
	}


//	@Before(value = "studentAll()")
	public void beforeAdvice() {
		System.out.println("This is before advice");
	}

//	@After("studentAll()")
	public void afterAdvice() {
		System.out.println("This is after advice");
	}

	@Around("studentAll()")
	public void aroundAdvice() {
		System.out.println("This is around advice");
	}

//	@AfterReturning(pointcut = "studentAll()", returning = "retVal")
	public void afterReturningAdvice(Object retVal) {
		System.out.println("Returning:" + retVal.toString());
	}
}
